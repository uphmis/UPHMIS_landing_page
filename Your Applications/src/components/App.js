import React from 'react'
import { string, number } from 'prop-types'
import { DataProvider } from '@dhis2/app-runtime'
import { CssReset } from '@dhis2/ui-core'
import { Main } from './Main'
import { Navigation } from './Navigation'
import 'typeface-roboto'

export const App = ({ baseUrl, apiVersion }) => (
    <DataProvider baseUrl={baseUrl} apiVersion={apiVersion}>
        <CssReset />
        <Main>
            <Navigation />
        </Main>
    </DataProvider>
)

App.propTypes = {
    baseUrl: string.isRequired,
    apiVersion: number.isRequired,
}
