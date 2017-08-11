import React from 'react';
import SizeUtils from './../supports/size-utils';
import TimeUtils from './../supports/time-utils';


const ManagerNode = (node) => (
              <div key={node.ID} className="card">
                <div className="content">                    
                  <img className="right floated mini ui image" 
                    alt={node.Status.State} 
                    title={node.Status.State} 
                    src={node.Status.State === 'ready' ? 'https://www.ctreap.net/images/icons32/accept.png' : 'https://www.nbninternational.com/checkout/Content/skins/099/images/icons_32/dialog-warning.png' }/>
                    { node.ManagerStatus.Leader === true &&
                        <img className="right floated mini ui image"                             
                            alt="Leader" title="Leader"
                            src='https://files.coinmarketcap.com/static/img/coins/16x16/aragon.png' />
                    }
                  <div className="header">                    
                    {node.Description.Hostname.toUpperCase()}
                  </div>
                  <div className="meta">                    
                    <b>{node.ID}</b>
                  </div>                            
                  
                  <div className="ui list">
                    <div className="item">
                      <i className="cube icon"></i>
                      <div className="content">
                        {SizeUtils(node.Description.Resources.MemoryBytes) + " Memory" }
                      </div>
                    </div>
                    <div className="item">
                      <i className="desktop icon"></i>
                      <div className="content">
                        {node.Description.Resources.NanoCPUs + " nanoCPU"}
                      </div>
                    </div>
                    <div className="item">
                      <i className="calendar icon"></i>
                      <div className="content">
                        {"Created: " + TimeUtils(node.CreatedAt)}
                      </div>
                    </div>
                    <div className="item">
                      <i className="history icon"></i>
                      <div className="content">
                        {"Updated: " + TimeUtils(node.UpdatedAt)}
                      </div>
                    </div>
                    <div className="item">
                      <i className="server icon"></i>
                      <div className="content">
                        {"Address: " + node.ManagerStatus.Addr}
                      </div>
                    </div>

                    
                  </div>
                </div>


                <div className="extra content">
                  <div className={node.ManagerStatus.Reachability === 'reachable'? 'green-text': 'red-text'}>
                    <i className="signal icon"></i>
                    <b>{node.ManagerStatus.Reachability === 'reachable'? 'Reachable' : 'Unreachable'}</b>
                    <span className="right floated star">
                        <button className="ui icon button">
                          <i className="remove  icon"></i>
                        </button>
                        <button className="ui icon button">
                          <i className="check circle  icon"></i>
                        </button>                        
                    </span>                    
                  </div>                  
                </div>                
              </div>
);

export default ManagerNode;
