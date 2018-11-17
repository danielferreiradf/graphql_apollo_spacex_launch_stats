import React from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import classNames from 'classnames';

function LaunchItem({ launch: { flight_number, mission_name, launch_date_local, launch_success } }) {
    return (
        <div className="card card-body mb-3">
            <div className="row">
                <div className="col-md-9">
                    <h4>Mission: <span className={classNames({
                        'text-success': launch_success, 'text-danger': !launch_success
                    })}>{mission_name}</span></h4>
                    <p>Date: <Moment format="YYYY-MM-DD - HH:mm">{launch_date_local}</Moment></p>
                </div>
                <div className="col-md-3 d-flex align-self-center justify-content-end">
                    <Link to={`/launch/${flight_number}`} className="btn btn-secondary">Launch Details</Link>
                </div>
            </div>
        </div>
    )
}

export default LaunchItem
