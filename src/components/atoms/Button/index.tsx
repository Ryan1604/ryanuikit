import React from 'react';

export interface ButtonProps {
  text: string;
}

export default function Button(props: ButtonProps) {
  return <div className="container bg-red p-5">{props.text}</div>;
}
