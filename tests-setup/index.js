import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MockDate from 'mockdate';

Enzyme.configure({ adapter: new Adapter() });

MockDate.set('2050-01-01T00:00:00.000Z');
