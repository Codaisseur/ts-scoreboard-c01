import React from 'react';

export interface ITitleProps {
  content: string;
}

const Title = ({ content }: ITitleProps) => <h1>{content}</h1>;

export default Title;
