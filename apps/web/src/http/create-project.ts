import { api } from './api-client'

interface CreateProjectRequest {
  name: string
  description: string
  org: string
}

type CreateProjectResponse = void

export async function createProject({
  description,
  name,
  org,
}: CreateProjectRequest): Promise<CreateProjectResponse> {
  await api.post(`organizations/${org}/projects`, {
    json: {
      name,
      description,
    },
  })
}
