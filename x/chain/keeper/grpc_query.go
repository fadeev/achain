package keeper

import (
	"github.com/alice/chain/x/chain/types"
)

var _ types.QueryServer = Keeper{}
