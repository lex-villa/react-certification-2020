import loginApi from './login.api';
import 'regenerator-runtime/runtime';

describe('Login api', () => {
  test('returns a mocked user', async () => {
    const result = await loginApi('wizeline', 'Rocks!');

    expect(result).toEqual(
      expect.objectContaining({
        id: expect.any(String),
        name: expect.any(String),
        avatarUrl: expect.any(String),
      })
    );
  });
});
