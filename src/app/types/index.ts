export type User = {
  id: string;
  name: string;
  age: number;
  gender: string;
  email: string;
  role: string;
  avatar: string | null;
};

export type CreditsPosition = 'left' | 'center' | 'right';
