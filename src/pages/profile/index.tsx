import { Input } from '../../components/Inputs';
import { Button } from '../../components/Buttom';

export default function Profile(){
    return (
        <>
            <div className="section users-edit">
                <div className="card">
                    <div className="card-content">
                    <ul className="tabs mb-2 row">
                        <li className="tab">
                        <a className="display-flex align-items-center active" id="account-tab" href="#account">
                            <i className="material-icons mr-1">person_outline</i><span>Account</span>
                        </a>
                        </li>
                        <li className="tab">
                        <a className="display-flex align-items-center" id="information-tab" href="#information">
                            <i className="material-icons mr-2">error_outline</i><span>Information</span>
                        </a>
                        </li>
                    </ul>
                    <div className="divider mb-3"></div>
                    <div className="row">
                        <div className="col s12" id="account">
                        <div className="media display-flex align-items-center mb-2">
                            <a className="mr-2" href="#">
                            <img src="../app-assets/images/avatar/avatar-11.png" alt="users avatar" className="z-depth-4 circle" height="64" width="64" />
                            </a>
                            <div className="media-body">
                            <h5 className="media-heading mt-0">Avatar</h5>
                            <div className="user-edit-btns display-flex">
                                <a href="#" className="btn-small indigo">Change</a>
                                <a href="#" className="btn-small btn-light-pink">Reset</a>
                            </div>
                            </div>
                        </div>
                        <form id="accountform">
                            <div className="row">
                                <div className="col s12 m6">
                                    <div className="row">
                                    <div className="col s12 input-field">
                                        <input id="username" name="username" type="text" className="validate" value="dean3004" data-error=".errorTxt1" />
                                        <label htmlFor="username">Username</label>
                                        <small className="errorTxt1"></small>
                                    </div>
                                    <div className="col s12 input-field">
                                        <input id="name" name="name" type="text" className="validate" value="Dean Stanley" data-error=".errorTxt2" />
                                        <label htmlFor="name">Name</label>
                                        <small className="errorTxt2"></small>
                                    </div>
                                    <div className="col s12 input-field">
                                        <input id="email" name="email" type="email" className="validate" value="deanstanley@gmail.com" data-error=".errorTxt3" />
                                        <label htmlFor="email">E-mail</label>
                                        <small className="errorTxt3"></small>
                                    </div>
                                    </div>
                                </div>
                                <div className="col s12 m6">
                                    <div className="row">
                                    <div className="col s12 input-field">
                                        <select>
                                        <option>User</option>
                                        <option>Staff</option>
                                        </select>
                                        <label>Role</label>
                                    </div>
                                    <div className="col s12 input-field">
                                        <select>
                                        <option>Active</option>
                                        <option>Banned</option>
                                        <option>Close</option>
                                        </select>
                                        <label>Status</label>
                                    </div>
                                    <div className="col s12 input-field">
                                        <input id="company" name="company" type="text" className="validate" />
                                        <label htmlFor="company">Company</label>
                                    </div>
                                    </div>
                                </div>
                                <div className="col s12">
                                    <table className="mt-1">
                                    <thead>
                                        <tr>
                                        <th>Module Permission</th>
                                        <th>Read</th>
                                        <th>Write</th>
                                        <th>Create</th>
                                        <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <td>Users</td>
                                        <td>
                                            <label>
                                            <input type="checkbox" checked />
                                            <span></span>
                                            </label>
                                        </td>
                                        <td>
                                            <label>
                                            <input type="checkbox" />
                                            <span></span>
                                            </label>
                                        </td>
                                        <td>
                                            <label>
                                            <input type="checkbox" />
                                            <span></span>
                                            </label>
                                        </td>
                                        <td>
                                            <label>
                                            <input type="checkbox" checked />
                                            <span></span>
                                            </label>
                                        </td>
                                        </tr>
                                        <tr>
                                        <td>Articles</td>
                                        <td>
                                            <label>
                                            <input type="checkbox" />
                                            <span></span>
                                            </label>
                                        </td>
                                        <td>
                                            <label>
                                            <input type="checkbox" checked />
                                            <span></span>
                                            </label>
                                        </td>
                                        <td>
                                            <label>
                                            <input type="checkbox" />
                                            <span></span>
                                            </label>
                                        </td>
                                        <td>
                                            <label>
                                            <input type="checkbox" checked />
                                            <span></span>
                                            </label>
                                        </td>
                                        </tr>
                                        <tr>
                                        <td>Staff</td>
                                        <td>
                                            <label>
                                            <input type="checkbox" checked />
                                            <span></span>
                                            </label>
                                        </td>
                                        <td>
                                            <label>
                                            <input type="checkbox" checked />
                                            <span></span>
                                            </label>
                                        </td>
                                        <td>
                                            <label>
                                            <input type="checkbox" />
                                            <span></span>
                                            </label>
                                        </td>
                                        <td>
                                            <label>
                                            <input type="checkbox" />
                                            <span></span>
                                            </label>
                                        </td>
                                        </tr>
                                    </tbody>
                                    </table>
                                    
                                </div>
                                <div className="col s12 display-flex justify-content-end mt-3">
                                    <button type="submit" className="btn indigo">
                                    Save changes</button>
                                    <button type="button" className="btn btn-light">Cancel</button>
                                </div>
                            </div>
                        </form>
                        </div>
                        <div className="col s12" id="information">
                        <form id="infotabform">
                            <div className="row">
                                <div className="col s12 m6">
                                    <div className="row">
                                        <div className="col s12">
                                            <h6 className="mb-2"><i className="material-icons mr-1">link</i>Social Links</h6>
                                        </div>
                                        <div className="col s12 input-field">
                                            <input className="validate" type="text" value="https://www.twitter.com/" />
                                            <label>Twitter</label>
                                        </div>
                                        <div className="col s12 input-field">
                                            <input className="validate" type="text" value="https://www.facebook.com/" />
                                            <label>Facebook</label>
                                        </div>
                                        <div className="col s12 input-field">
                                            <input className="validate" type="text" />
                                            <label>Google+</label>
                                        </div>
                                        <div className="col s12 input-field">
                                            <input id="linkedin" name="linkedin" className="validate" type="text" />
                                            <label htmlFor="linkedin">LinkedIn</label>
                                        </div>
                                        <div className="col s12 input-field">
                                            <input className="validate" type="text" value="https://www.instagram.com/" />
                                            <label>Instagram</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col s12 m6">
                                    <div className="row">
                                    <div className="col s12">
                                        <h6 className="mb-4"><i className="material-icons mr-1">person_outline</i>Personal Info</h6>
                                    </div>
                                    <div className="col s12 input-field">
                                        <input id="datepicker" name="datepicker" type="text" className="birthdate-picker datepicker" placeholder="Pick a birthday" data-error=".errorTxt4" />
                                        <label htmlFor="datepicker">Birth date</label>
                                        <small className="errorTxt4"></small>
                                    </div>
                                    <div className="col s12 input-field">
                                        <select id="accountSelect">
                                        <option>USA</option>
                                        <option>India</option>
                                        <option>Canada</option>
                                        </select>
                                        <label>Country</label>
                                    </div>
                                    <div className="col s12">
                                        <label>Languages</label>
                                        <select className="browser-default" id="users-language-select2" multiple={true}>
                                        <option value="English" selected>English</option>
                                        <option value="Spanish">Spanish</option>
                                        <option value="French">French</option>
                                        <option value="Russian">Russian</option>
                                        <option value="German">German</option>
                                        <option value="Arabic" selected>Arabic</option>
                                        <option value="Sanskrit">Sanskrit</option>
                                        </select>
                                    </div>
                                    <div className="col s12 input-field">
                                        <input id="phonenumber" type="text" className="validate" value="(+656) 254 2568" />
                                        <label htmlFor="phonenumber">Phone</label>
                                    </div>
                                    <div className="col s12 input-field">
                                        <input id="address" name="address" type="text" className="validate" data-error=".errorTxt5" />
                                        <label htmlFor="address">Address</label>
                                        <small className="errorTxt5"></small>
                                    </div>
                                    </div>
                                </div>
                            <div className="col s12">
                                <div className="input-field">
                                <input id="websitelink" name="websitelink" type="text" className="validate" />
                                <label htmlFor="websitelink">Website</label>
                                </div>
                                <label>Favourite Music</label>
                                <div className="input-field">
                                <select className="browser-default" id="users-music-select2" multiple={true}>
                                    <option value="Rock">Rock</option>
                                    <option value="Jazz" selected>Jazz</option>
                                    <option value="Disco">Disco</option>
                                    <option value="Pop">Pop</option>
                                    <option value="Techno">Techno</option>
                                    <option value="Folk" selected>Folk</option>
                                    <option value="Hip hop">Hip hop</option>
                                </select>
                                </div>
                            </div>
                            <div className="col s12">
                                <label>Favourite movies</label>
                                <div className="input-field">
                                <select className="browser-default" id="users-movies-select2" multiple={true}>
                                    <option value="The Dark Knight" selected>The Dark Knight
                                    </option>
                                    <option value="Harry Potter" selected>Harry Potter</option>
                                    <option value="Airplane!">Airplane!</option>
                                    <option value="Perl Harbour">Perl Harbour</option>
                                    <option value="Spider Man">Spider Man</option>
                                    <option value="Iron Man" selected>Iron Man</option>
                                    <option value="Avatar">Avatar</option>
                                </select>
                                </div>
                            </div>
                            <div className="col s12 display-flex justify-content-end mt-1">
                                <button type="submit" className="btn indigo">
                                Save changes</button>
                                <button type="button" className="btn btn-light">Cancel</button>
                            </div>
                            </div>
                        </form>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
}