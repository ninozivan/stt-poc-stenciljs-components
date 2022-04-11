import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'stt-button',
  styleUrl: 'stt-button.css',
  shadow: true,
})
export class SttButton {
  @Prop() size: string;

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
