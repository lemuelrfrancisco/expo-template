import { Slot } from 'expo-router';
import { SessionProvider } from '../store/auth-context';
export default function Root() {
  return (
    <SessionProvider>
      <Slot />
    </SessionProvider>
  );
}
