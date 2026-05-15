import { Repository, UpdatedRepository } from '../models';

const GITHUB_API_URL = 'https://api.github.com';

function shouldKeep(repository: UpdatedRepository): boolean {
  const hasDescription = Boolean(repository.description?.trim());
  const hasHomepage = Boolean(repository.homepage?.trim());
  const hasTopics = (repository.topics?.length ?? 0) > 0;

  return hasDescription && (hasHomepage || hasTopics);
}

function normalize(repository: Repository): UpdatedRepository {
  return {
    id: repository.id,
    name: repository.name,
    fullName: repository.full_name,
    description: repository.description,
    url: repository.html_url,
    language: repository.language,
    homepage: repository.homepage,
    topics: repository.topics,
  };
}

export const getRepositories = async (limit = 9): Promise<UpdatedRepository[]> => {
  const token = process.env.GITHUB_TOKEN;

  if (!token) {
    // eslint-disable-next-line no-console
    console.error('GITHUB_TOKEN is not configured');

    return [];
  }

  try {
    const response = await fetch(`${GITHUB_API_URL}/user/repos?visibility=public&per_page=100&sort=updated`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      // eslint-disable-next-line no-console
      console.error(`Failed to fetch repositories: ${response.status}`);

      return [];
    }

    const data = (await response.json()) as Repository[];

    return data.map(normalize).filter(shouldKeep).slice(0, limit);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Unexpected error fetching repositories:', error);

    return [];
  }
};
