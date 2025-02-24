const fetchFlagUrl = 'https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/656e64';
export const fetchFlag = async () : Promise<string> => {
  const response = await fetch(fetchFlagUrl);
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return await response.text();
};
