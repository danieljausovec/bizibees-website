/**
 * POST /api/sign-in  { email, password }
 *
 * Stub: accepts any non-empty credentials.
 * TODO: authenticate against your backend, set a secure httpOnly session
 * cookie and handle two-factor login.
 */
export default defineEventHandler(async (event) => {
  const body = await readBody<{ email?: string; password?: string }>(event)

  if (!body?.email || !body?.password) {
    throw createError({ statusCode: 422, message: 'Please enter your email and password.' })
  }

  return { ok: true }
})
