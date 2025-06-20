import { DatabaseAdapter } from './adapters/DatabaseAdapter';
import { ApiAdapter } from './adapters/ApiAdapter';
import { FileAdapter } from './adapters/FileAdapter';
import { DataVisitor } from './visitors/DataVisitor';
import { LogVisitor } from './visitors/LogVisitor';

const sources = [new DatabaseAdapter(), new ApiAdapter(), new FileAdapter()];

const visitors = [new DataVisitor(), new LogVisitor()];

for (const source of sources) {
  for (const visitor of visitors) {
    source.accept(visitor);
  }
}
