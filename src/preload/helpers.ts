export const getEnv = (key: string, strict: boolean = false): string | undefined => {
  console.log('huelebi');
  const value = process.env[key];
  if (!value && strict) {
    throw new Error(`Error: key ${key} is undefined.`);
  }
  return value;
};
