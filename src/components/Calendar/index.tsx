export function Calendar(){
    return (
        <div id="app-calendar">
            <div className="row">
                <div className="col s12">
                    <div className="card">
                        <div className="card-content">
                            <h4 className="card-title">
                                Basic Calendar
                            </h4>
                            <div id="basic-calendar"></div>
                        </div>
                    </div>
                </div>
                <div className="col s12">
                    <div className="card">
                        <div className="card-content">
                            <h4 className="card-title">
                                External Dragging
                            </h4>
                            <div className="row">
                                <div className="col m3 s12">
                                    <div id='external-events'>
                                        <h5>Draggable Events</h5>
                                        <div className="fc-events-container mb-5">
                                        <div className='fc-event' data-color='#009688'>All Day Event</div>
                                        <div className='fc-event' data-color='#4CAF50'>Long Event</div>
                                        <div className='fc-event' data-color='#00bcd4'>Meeting</div>
                                        <div className='fc-event' data-color='#ff5722'>Birthday party</div>
                                        <div className='fc-event' data-color='#9c27b0'>Lunch</div>
                                        <div className='fc-event' data-color='#e51c23'>Conference Meeting</div>
                                        <div className='fc-event' data-color='#e91e63'>Party</div>
                                        <div className='fc-event' data-color='#3f51b5'>Happy Hour</div>
                                        <div className='fc-event' data-color='#ffc107'>Dance party</div>
                                        <div className='fc-event' data-color='#4a148c'>Dinner</div>
                                        <p>
                                            <label>
                                                <input type="checkbox" id="drop-remove" />
                                                <span>Remove After Drop</span>
                                            </label>
                                        </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col m9 s12">
                                    <div id='fc-external-drag'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}