import BookIcon from '@mui/icons-material/Book';
import SliderCreate from './SliderCreate';
import PostEdit from './SliderEdit';
import PostList from './SliderList';
import PostShow from './SliderShow';

export default {
    list: PostList,
    create: SliderCreate,
    edit: PostEdit,
    show: PostShow,
    icon: BookIcon,
    recordRepresentation: 'title',
};
