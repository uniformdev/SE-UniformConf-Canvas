import { ComponentProps, registerUniformComponent, UniformSlot } from '@uniformdev/canvas-react';
import React from 'react';

export type SessionListProps = ComponentProps<{
  title: string;
}>;

function SessionList({ title }: SessionListProps) {
  return (
    <fieldset>
      <section className="bg-white border-b py-24">
        <div className="container mx-auto flex flex-wrap pt-4 pb-12">
          <h1
            className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <UniformSlot name="sessions">
            {({ child, key }) => (
              <div key={key} className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                {child}
              </div>
            )}
          </UniformSlot>
        </div>
      </section>
    </fieldset>
  );
}
registerUniformComponent({
  type: 'sessionList',
  component: SessionList,
});

export default SessionList;
