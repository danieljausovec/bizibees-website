/** Layout switches the default layout reads off each page's meta. */
declare module '#app' {
  interface PageMeta {
    /** Float the header over the content. Defaults to true. */
    stickyHeader?: boolean
    /** Show "Join the waitlist" in the header nav. Defaults to true. */
    headerCta?: boolean
    /** Extra line appended to the footer wordmark. */
    footerNote?: string
  }
}

export {}
