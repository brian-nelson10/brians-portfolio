import bootstrap from '../assets/skills/bootstrap-min.png';
import css from '../assets/skills/css-min.png';
import figma from '../assets/skills/figma-min.png';
import firebase from '../assets/skills/firebase-min.png';
import git from '../assets/skills/git-min.png';
import graphql from '../assets/skills/graphql-min.png';
import html from '../assets/skills/html-min.png';
import illustrator from '../assets/skills/illustrator-min.png';
import javascript from '../assets/skills/javascript-min.png';
import materialui from '../assets/skills/materialui-min.png';
import mongodb from '../assets/skills/mongoDB-min.png';
import mysql from '../assets/skills/mysql-min.png';
import post from '../assets/skills/postgresql-min.png';
import python from '../assets/skills/python-min.png';
import react from '../assets/skills/react-min.png';
import tailwind from '../assets/skills/tailwind-min.png';
import typescript from '../assets/skills/typescript-min.png';
import node from '../assets/skills/node-min.png';

export const skillsImage = (skill) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
        case 'bootstrap':
            return bootstrap;
        case 'css':
            return css;
        case 'figma':
            return figma;
        case 'firebase':
            return firebase;
        case 'git':
            return git;
        case 'graphql':
            return graphql;
        case 'html':
            return html;
        case 'illustrator':
            return illustrator;
        case 'javascript':
            return javascript;
        case 'materialui':
            return materialui;
        case 'mongodb':
            return mongodb;
        case 'mysql':
            return mysql;
        case 'postgresql':
            return post;
        case 'python':
            return python;
        case 'react':
            return react;
        case 'tailwind':
            return tailwind;
        case 'typescript':
            return typescript;
        case 'node.js':
            return node;
        default:
            break;
    };
};