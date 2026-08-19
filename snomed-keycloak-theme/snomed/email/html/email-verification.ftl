<#import "template.ftl" as layout>
<@layout.emailLayout>
<p>${kcSanitize(msg("emailVerificationUsernameNotice", user.username))?no_esc}</p>
${kcSanitize(msg("emailVerificationBodyHtml",link, linkExpiration, realmName, linkExpirationFormatter(linkExpiration)))?no_esc}
</@layout.emailLayout>
