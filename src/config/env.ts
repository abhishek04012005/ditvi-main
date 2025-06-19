export interface EnvConfig {
  siteName: string;
  siteUrl: string;
  contactEmail: string;
  googleVerification: string;
}

export const env: EnvConfig = {
  siteName: process.env.NEXT_PUBLIC_SITE_NAME!,
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL!,
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL!,
  googleVerification: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION!,
};

// Validate environment variables
const requiredEnvs = [
  "NEXT_PUBLIC_SITE_NAME",
  "NEXT_PUBLIC_SITE_URL",
  "NEXT_PUBLIC_CONTACT_EMAIL",
  "NEXT_PUBLIC_GOOGLE_VERIFICATION",
];

requiredEnvs.forEach((envVar) => {
  if (!process.env[envVar]) {
    throw new Error(`Missing required environment variable: ${envVar}`);
  }
});

export default env;
