'use client';
import React from 'react';
import { useCreateBlockNote } from '@blocknote/react';
import { BlockNoteView } from '@blocknote/mantine';
import Example from './types/example';

export default function Home() {
  return (
    <div>
      <Example age={2} name='kk' />
    </div>
  );
}
