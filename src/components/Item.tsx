import * as React from 'react';
import * as PropTypes from 'prop-types';
import { EditItem } from '../containers/EditItem';
import { ShowItem } from '../containers/ShowItem';

export interface IItemOwnProps {
  readonly id: Guid;
  readonly position: number;
}

export interface IItemDispatchStateProps {
  readonly isEdited: boolean;
}

type IItemProps = IItemOwnProps & IItemDispatchStateProps;

export class Item extends React.PureComponent<IItemProps> {
  static displayName = 'Item';

  static propTypes: PropTypes.ValidationMap<IItemProps> = {
    id: PropTypes.string.isRequired,
    position: PropTypes.number.isRequired,
    isEdited: PropTypes.bool.isRequired,
  };

  private _renderEditedItem = (): JSX.Element => (
    <EditItem
      id={this.props.id}
      position={this.props.position}
    />
  );

  private _renderPristineItem = (): JSX.Element => (
    <ShowItem
      position={this.props.position}
      id={this.props.id}
    />
  );

  private _renderStateIsEdited = (): JSX.Element => (
    this.props.isEdited
      ? this._renderEditedItem()
      : this._renderPristineItem()
  );

  render(): JSX.Element {
    return (
      <li
        className="list-group-item"
      >
        {this._renderStateIsEdited()}
      </li>
    );
  }
}
