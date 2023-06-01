import { Component } from "react";
import { Button } from "react-bootstrap";

interface ButtonProps {
  label?: string;
  icon?: string;
}

export default class TestButton extends Component<ButtonProps> {
  render() {
    const { label, icon } = this.props;

    return (
      <Button>
        {icon && <span>{icon}</span>}
        {label && <span>{label}</span>}
      </Button>
    );
  }
}
