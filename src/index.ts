export interface LambdaLoggerInput {
  label?: "INFO" | "ERROR";
  message: object | string;
}

export interface LambdaLoggerOutput {
  timestamp: string;
  label: "INFO" | "ERROR";
  message: object | string;
}

export const lambdaLogger = async (input: LambdaLoggerInput): Promise<void> => {
  let output: LambdaLoggerOutput = {
    timestamp: new Date().toISOString(),
    label: input.label ? input.label : "INFO",
    message: input.message,
  };
  console.log(output);
};
