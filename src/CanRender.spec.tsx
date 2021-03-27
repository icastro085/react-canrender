import React from 'react';
import { render, screen } from '@testing-library/react';

import { CanRender, ElseRender, ElseCanRender } from '.';

describe('CanRender#', () => {
  describe('when render with true condition', () => {
    it('should render children elements', async () => {
      render(<CanRender when>test-can-render</CanRender>);
      expect(await screen.queryByText('test-can-render')).not.toBeNull();
    });

    it('should render any children elements', async () => {
      render(
        <CanRender when>
          <span>test-can-render-1</span>
          <span>test-can-render-2</span>
        </CanRender>,
      );
      expect(await screen.queryByText('test-can-render-1')).not.toBeNull();
      expect(await screen.queryByText('test-can-render-2')).not.toBeNull();
    });

    it('should not render ElseRender', async () => {
      render(
        <CanRender when>
          test-can-render
          <ElseRender>test-else-render</ElseRender>
        </CanRender>,
      );

      expect(await screen.queryByText('test-can-render')).not.toBeNull();
      expect(await screen.queryByText('test-else-render')).toBeNull();
    });

    it('should not render ElseCanRender', async () => {
      render(
        <CanRender when>
          test-can-render
          <ElseCanRender when>test-else-can-render</ElseCanRender>
          <ElseRender>test-else-render</ElseRender>
        </CanRender>,
      );

      expect(await screen.queryByText('test-can-render')).not.toBeNull();
      expect(await screen.queryByText('test-else-can-render')).toBeNull();
      expect(await screen.queryByText('test-else-render')).toBeNull();
    });
  });

  describe('when render with false condition', () => {
    it('should not render children element', async () => {
      render(<CanRender when={false}>test-can-render</CanRender>);
      expect(await screen.queryByText('test-can-render')).toBeNull();
    });

    it('should render ElseRender', async () => {
      render(
        <CanRender when={false}>
          test-can-render
          <ElseRender>test-else-render</ElseRender>
        </CanRender>,
      );

      expect(await screen.queryByText('test-can-render')).toBeNull();
      expect(await screen.queryByText('test-else-render')).not.toBeNull();
    });

    it('should render all ElseRender', async () => {
      render(
        <CanRender when={false}>
          test-can-render
          <ElseRender><span>test-else-render-1</span></ElseRender>
          <ElseRender><span>test-else-render-2</span></ElseRender>
        </CanRender>,
      );

      expect(await screen.queryByText('test-can-render')).toBeNull();
      expect(await screen.queryByText('test-else-render-1')).not.toBeNull();
      expect(await screen.queryByText('test-else-render-2')).not.toBeNull();
    });

    it('should render ElseCanRender', async () => {
      render(
        <CanRender when={false}>
          test-can-render
          <ElseCanRender when>test-else-can-render</ElseCanRender>
          <ElseRender>test-else-render</ElseRender>
        </CanRender>,
      );

      expect(await screen.queryByText('test-can-render')).toBeNull();
      expect(await screen.queryByText('test-else-can-render')).not.toBeNull();
      expect(await screen.queryByText('test-else-render')).toBeNull();
    });
  });

  describe('When have 2 ElseCanRender', () => {
    it('should render first ElseCanRender', async () => {
      render(
        <CanRender when={false}>
          test-can-render
          <ElseCanRender when>test-else-can-render-1</ElseCanRender>
          <ElseCanRender when>test-else-can-render-2</ElseCanRender>
          <ElseRender>test-else-render</ElseRender>
        </CanRender>,
      );

      expect(await screen.queryByText('test-can-render')).toBeNull();
      expect(await screen.queryByText('test-else-can-render-1')).not.toBeNull();
      expect(await screen.queryByText('test-else-can-render-2')).toBeNull();
      expect(await screen.queryByText('test-else-render')).toBeNull();
    });

    it('should render second ElseCanRender', async () => {
      render(
        <CanRender when={false}>
          test-can-render
          <ElseCanRender when={false}>test-else-can-render-1</ElseCanRender>
          <ElseCanRender when>test-else-can-render-2</ElseCanRender>
          <ElseRender>test-else-render</ElseRender>
        </CanRender>,
      );

      expect(await screen.queryByText('test-can-render')).toBeNull();
      expect(await screen.queryByText('test-else-can-render-1')).toBeNull();
      expect(await screen.queryByText('test-else-can-render-2')).not.toBeNull();
      expect(await screen.queryByText('test-else-render')).toBeNull();
    });
  });
});
