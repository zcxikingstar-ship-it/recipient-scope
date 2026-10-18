# Recipient Scope

**A local recipient preflight before you send mail through Gmail, Outlook, Apple Mail, or another mail client.**

Paste a recipient snapshot, list the domains you consider internal, and review external recipients, malformed addresses, and duplicates across To, Cc, and Bcc. No account, extension permission, contact access, upload, or sending is involved.

## Why

An external-recipient warning is valuable, but it can depend on an organization's Gmail/Outlook settings, contacts, and a specific client. Recipient Scope is a portable final check: it reviews exactly the recipient set you paste, including cross-field duplicates, before you return to your mail client.

## Use

Open [the live app](https://zcxikingstar-ship-it.github.io/recipient-scope/) or `index.html` locally.

1. Enter one or more internal domains, such as `company.com`.
2. Paste plain addresses into To, Cc, and Bcc.
3. Review external addresses, malformed entries, and duplicates.
4. Manually correct or approve the recipient set in your original mail client.

Example:

```text
Internal: acme.test
To: alex@acme.test, client@example.test
Cc: client@example.test
```

`client@example.test` is external and duplicated across fields.

## Limits

- This checks only plain email address text and the domains you provide.
- It does not access contacts, inspect the message, send mail, confirm identity, or prove a recipient is intended.
- A green result does not make a recipient safe; a warning is a deliberate review prompt.

## Development

No runtime dependencies. Node.js 20+ is required only for checks.

```sh
npm run check
npm test
```

## Security and privacy

All processing is local to the browser page. There is no backend, analytics, or network-request code. Do not paste sensitive recipient data into software you do not trust.

## License

[MIT](LICENSE)

