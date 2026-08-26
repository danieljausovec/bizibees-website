/** Layout switches the default layout reads off each page's meta. */
declare module '#app' {
  interface PageMeta {
    /** Show "Join the waitlist" in the header nav. Defaults to true. */
    headerCta?: boolean
    /** One-line summary under the footer wordmark. */
    footerTagline?: string
  }
}

export {}
