import React from 'react';

type Props = { name: string; age: number };

export default function Example({ age: ager, name: namer }: Props) {
  return <div>Example</div>;
}
