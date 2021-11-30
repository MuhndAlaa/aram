import {lists} from './listData';
import './ListView.scss';
import  List  from './list/List';

export const ListView = () => {
    return (
        <div>
            {
                lists.map((item, index)=><List key={index} list={item}></List>
                )
            }
        </div>
    )
}
