import React, { PureComponent } from 'react';
import assignment from '../../public/images/assignment.gif';
import { TsComponent } from './TsComponent.tsx';
import { Board } from './Board';

export class List extends PureComponent {
  render() {
    return (
      <div className="row">
        {/* TODO: You can delete the assignment part once you do not need it */}
        <div className="row">
          <div className="col-sm-12">
            <p className="lead text-center">
              Desired functionality is captured in the gif image.
            </p>
            <p className="lead text-center">
              <b>Note: </b>Try to make solution easily extensible (e.g. more displayed fields per item like <code>dateCreated</code>).
            </p>
            <img
              src={assignment}
              alt="assignment"
              className="img--assignment"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 text-center">
            <TsComponent
              name="𝕱𝖆𝖓𝖈𝖞"
              invisible
            />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12">
            <Board />
          </div>
        </div>
      </div>
    );
  }
}
