
import * as ACTIONS from './actionTypes';

export default function selectArtifact(node, artifactType) {
    node.ArtifactType = artifactType;
    return {
        type: ACTIONS.SELECT_ARTIFACT,
        payload: node
    };
}