import {
  type _TelemetryConfigModel,
  type TelemetryConfigModel,
} from '@lib/config/telemetry/telemetry.models';
import { getNodeAutoInstrumentations } from '@opentelemetry/auto-instrumentations-node';
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http';
import { AwsLambdaInstrumentation } from '@opentelemetry/instrumentation-aws-lambda';
import { CompressionAlgorithm } from '@opentelemetry/otlp-exporter-base';
import { BatchSpanProcessor } from '@opentelemetry/sdk-trace-base';
import { configureOpentelemetry } from '@uptrace/node';

export const _telemetry = ({
  batchSize,
  name,
  queueSize,
  source,
}: TelemetryConfigModel): _TelemetryConfigModel => {
  const exporter = new OTLPTraceExporter({
    compression: CompressionAlgorithm.GZIP,
    headers: { 'uptrace-dsn': source },
    url: 'https://otlp.uptrace.dev/v1/traces',
  });

  const spanProcessor = new BatchSpanProcessor(exporter, {
    maxExportBatchSize: batchSize,
    maxQueueSize: queueSize,
  });

  configureOpentelemetry({
    deploymentEnvironment: process.env.NODE_ENV,
    dsn: source,
    instrumentations: [
      getNodeAutoInstrumentations({ '@opentelemetry/instrumentation-fs': { enabled: false } }),
      new AwsLambdaInstrumentation({}),
    ],
    serviceName: name,
    // spanProcessor,
    // traceExporter: exporter,
  });
};
