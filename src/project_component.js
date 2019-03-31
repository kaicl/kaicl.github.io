

class ProjectComponent extends React.Component{
   
    render() {
    const destTime = this.props.destTime;
    const origTime = this.props.origTime;
    const tripTime = this.props.tripTime;
    //const fares = this.props.fares;
  
    return (
        <section className="trip">
            <header className="time_schedule">
            <p><span id="time_ori">{origTime}</span> <i className="fas fa-chevron-right"></i><i className="fas fa-chevron-right">
            </i> <span id="time_dest">{destTime}</span>
            <span id="time_take">{tripTime} min</span></p></header>
            <details className="fare_detail">
                <summary><span id="detail">Detail</span>
                <span id="fare"> $"cash"</span></summary>
                
                <section className="detail_info"></section>
            </details>
                
        </section>
    );
  }
}

export default ProjectComponent;