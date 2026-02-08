import "@testing-library/jest-dom";
import { server } from "../mocks/server";

beforeAll(() => server.listen());
afterEach(() => {
  vi.restoreAllMocks();
  server.resetHandlers();
});
afterAll(() => server.close());
