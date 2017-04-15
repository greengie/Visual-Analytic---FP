import React, {Component} from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson-client';
import _ from 'lodash';

const Map = ({ topology, projection }) => {
    const D = d3.geo.path().projection(projection),
          countries = topojson.feature(topology, topology.objects.countries);

     return (
        <g>
            {countries.features.map((country, i) => (
                <path d={D(country)}
                      key={`${country.id}-${i}`}
                     style={{stroke: 'white',
                              strokeWidth: '0.25px',
                              fill: 'grey'}} />
            ))}
        </g>
     );
};

const CountryMigrations = ({ data, nameIdMap, centroids }) => {
     const line = d3.svg.line(),
           destination = centroids[data.id];

     console.log(data.name);

     const sources =  Object.keys(data.source)
                            .filter(name => centroids[nameIdMap[name]])
                            .map(name => centroids[nameIdMap[name]]);
     return (
         <g>
             {sources.map((source, i) => (
                 <path d={line([destination, source])}
                 style={{stroke: 'black',
                         strokeWidth: '1px'}}
                 key={`${data.id}-${i}`} />
              ))}
         </g>
     )
 };

 const Migrations = ({ topology, projection, data, nameIdMap }) => {
     const countries = topojson.feature(topology, topology.objects.countries),
           path = d3.geo.path().projection(projection),
           centroids = _.fromPairs(countries.features
                                            .map(country => [country.id,
                                                             path.centroid(country)]));




     return (
         <g>
             <CountryMigrations data={data[5]} nameIdMap={nameIdMap}
                                centroids={centroids} />
         </g>
     );
 };

 class World extends Component {
   constructor(props) {
     super(props);
     this.state = { topology: null };
   }

   projection = d3.geo.equirectangular()
                    .scale(200)

     componentWillMount() {
         d3.json('http://128.199.99.233:3000/api/jsonworld',
                 (err, topology) => {
                     this.setState({
                         topology: topology
                     });
                 });
     }

     render() {
         const { width, height } = this.props,
               { topology } = this.state;

         let Migration;

         if (!topology) {
             return null;
         }

         if(this.props.data != null){
           Migration = (
             <Migrations topology={topology} projection={this.projection}
                  data={this.props.data} nameIdMap={this.props.nameIdMap} />
           );
         }


         return (
             <svg width={width} height={height}>
                 <Map topology={topology} projection={this.projection} />
                 {Migration}
           </svg>
         )
     }
 }

 export { World };
