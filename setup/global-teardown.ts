async function globalTeardown() {
  console.log('GLOBAL TEARDOWN: Starting global teardown - runs once after all tests');
  // Example: You could stop test database, cleanup services, etc.
}

export default globalTeardown;