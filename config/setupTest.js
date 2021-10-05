import Enzym, {shallow, render, mount} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import toJson from 'enzyme-to-json';

Enzym.configure({adapter: new Adapter()});

global.shallow = shallow;
global.render = render;
global.mount = mount;
global.toJson = toJson;


console.error = messsage => {
    throw new Error(message);
}