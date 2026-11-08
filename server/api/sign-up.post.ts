/**
 * POST /api/sign-up  { accountName, email }
 *
 * Stub: validates input and pretends to create the account.
 * TODO: create the account in your backend (Django API), then send the
 * confirmation / set-password email.
 */
export default defineEventHandler(async (event) => {
  const body = await readBody<{ accountName?: string; email?: string }>(event)

  const accountName = String(body?.accountName ?? '').trim()
  const email = String(body?.email ?? '').trim().toLowerCase()

  if (accountName.length < 2 || accountName.length > 120) {
    throw createError({ statusCode: 422, message: 'Please enter an account name (2–120 characters).' })
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) {
    throw createError({ statusCode: 422, message: 'Please enter a valid email address.' })
  }

  // e.g. await $fetch(`${useRuntimeConfig().apiBase}/accounts/`, { method: 'POST', body: { accountName, email } })

  return { ok: true, email }
})
