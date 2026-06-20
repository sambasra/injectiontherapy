// Basic bot heuristics — used to flag AffiliateClick.isLikelyBot.
// Networks claw back commissions on bot traffic, so we flag it here
// to exclude from EPC/revenue dashboards without blocking the redirect.

const BOT_UA_PATTERNS = [
  /bot/i, /crawl/i, /spider/i, /slurp/i, /baidu/i, /bing/i, /yandex/i,
  /googlebot/i, /facebookexternalhit/i, /twitterbot/i, /semrush/i, /ahrefs/i,
  /mj12bot/i, /dotbot/i, /petalbot/i, /bytespider/i, /claudebot/i,
  /gptbot/i, /python-requests/i, /go-http-client/i, /curl\//i, /wget\//i,
  /headless/i, /phantomjs/i, /selenium/i, /puppeteer/i,
]

export function detectBot(userAgent: string | null, headers: Headers): boolean {
  if (!userAgent || userAgent.trim() === '') return true

  for (const pattern of BOT_UA_PATTERNS) {
    if (pattern.test(userAgent)) return true
  }

  // No Accept-Language header is a common bot signal
  const acceptLanguage = headers.get('accept-language')
  if (!acceptLanguage) return true

  return false
}

export function parseDevice(userAgent: string | null): { device: string; browser: string; os: string } {
  if (!userAgent) return { device: 'unknown', browser: 'unknown', os: 'unknown' }

  const ua = userAgent.toLowerCase()

  let device = 'desktop'
  if (/mobile|android|iphone|ipod/i.test(ua)) device = 'mobile'
  else if (/tablet|ipad/i.test(ua)) device = 'tablet'

  let browser = 'other'
  if (/edg\//i.test(ua)) browser = 'edge'
  else if (/chrome/i.test(ua)) browser = 'chrome'
  else if (/firefox/i.test(ua)) browser = 'firefox'
  else if (/safari/i.test(ua)) browser = 'safari'
  else if (/opera|opr/i.test(ua)) browser = 'opera'

  let os = 'other'
  if (/windows/i.test(ua)) os = 'windows'
  else if (/mac os x|macos/i.test(ua)) os = 'macos'
  else if (/android/i.test(ua)) os = 'android'
  else if (/iphone|ipad|ipod/i.test(ua)) os = 'ios'
  else if (/linux/i.test(ua)) os = 'linux'

  return { device, browser, os }
}
