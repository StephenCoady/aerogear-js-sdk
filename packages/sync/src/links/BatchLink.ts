import { BatchHttpLink } from "apollo-link-batch-http";
import { DataSyncConfig } from "../config/DataSyncConfig";
import { ApolloLink } from "apollo-link";

export const batchLink = (config: DataSyncConfig): ApolloLink => {
  const link = new BatchHttpLink({
    uri: config.httpUrl,
    includeExtensions: config.auditLogging,
    batchMax: 2,
    batchInterval: 150
  }) as ApolloLink;
  return link;
};
