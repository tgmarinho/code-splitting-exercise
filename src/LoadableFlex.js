import React from "react";
import Loadable from 'react-loadable'

export default function withLoadable(page) {
    return Loadable({

        loader: () => {
            return import(`./Components/${page}`)
        },
        loading() {
            return <div>Loading...</div>
        }
    });

}