<#ftl output_format="plainText">
${msg("emailVerificationUsernameNotice", user.username)}

${msg("emailVerificationBody",link, linkExpiration, realmName, linkExpirationFormatter(linkExpiration))}