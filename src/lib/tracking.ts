import { createHash } from 'crypto'

export function hashIp(ip: string): string {
  return createHash('sha256').update(ip + (process.env.SESSION_SECRET ?? 'salt')).digest('hex').slice(0, 16)
}

export function buildDestinationUrl(
  destinationUrl: string,
  clickId: string,
  subIdParamName: string | null,
  appendClickId: boolean,
): string {
  if (!appendClickId || !subIdParamName) return destinationUrl

  const url = new URL(destinationUrl)
  url.searchParams.set(subIdParamName, clickId)
  return url.toString()
}
