import {lists} from './listData';
import './ListView.scss';
import  List  from './list/List';

export const ListView = ({currentBoard}) => {
    return (
        <div>
            {
                lists.map((item, index)=><List currentBoard={currentBoard} key={index} list={item}></List>
                )
            }
        </div>
    )
}
