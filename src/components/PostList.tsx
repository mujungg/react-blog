import { useState } from "react";
import { Item } from "../types";
import ViewPost from "./ViewPost";

// props type
interface ItemProps {
    post: Item;
    onRemove: (id: number) => void;
    onClickWrite: (item: Item) => void;
    onClickDetail: (item: Item) => void;
}

interface ListProps {
    posts: Item[];
    onRemove: (id: number) => void;
    onClickWrite: (item:Item) => void;
    onClickDetail: (item:Item) => void;
}

// components
function PostItem({ post, onRemove, onClickWrite, onClickDetail }: ItemProps) {
    const [isHide, setHide] = useState<boolean>(true);

    return (
        <div className="container" onMouseEnter={() => setHide(false)} onMouseLeave={() => setHide(true)}>
            <span onClick={() => onClickDetail(post)}>{post.title}</span>
            {!isHide && (
                <span >
                    <button onClick={() => onClickWrite(post)}>수정</button>
                    <button onClick={() => onRemove(post.id)}>삭제</button>
                </span>
            )}
        </div>
    );
}
function PostList({ posts, onRemove, onClickWrite, onClickDetail}: ListProps) {
    return (
        <div>
            {posts.map(post => (
                <PostItem  post={post} onRemove={onRemove} onClickWrite={onClickWrite} onClickDetail={onClickDetail} key={post.id}/>
            ))}
        </div>

    )
}

export default PostList;