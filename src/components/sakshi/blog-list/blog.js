import React from 'react';

export const BlogsList = (props) => {
    const { list } = props
    return (
        <div className="List">
            <table>
                <thead>
                    <tr>
                        <td>Title</td>
                        <td>Content</td>
                    </tr>
                </thead>
                <tbody>
                    {list && list.map(item =>
                        <tr>
                            <td>{item.title}</td>
                            <td>{item.content}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}