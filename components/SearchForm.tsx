import { useRouter } from 'next/router';
import { useState, ChangeEvent, FormEvent } from 'react';

interface SearchFormProps {
  path: '/folder' | '/shared';
  className?: string;
}

export default function SearchForm({ className, path }: SearchFormProps) {
  const [value, setValue] = useState('');
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!value) {
      return router.push('/');
    }

    router.push(`${path}?q=${value}`);
  };

  return (
    <form className={`${className}`} onSubmit={handleSubmit}>
      <input
        value={value}
        placeholder="링크를 검색해보세요."
        onChange={handleChange}
      />
    </form>
  );
}
