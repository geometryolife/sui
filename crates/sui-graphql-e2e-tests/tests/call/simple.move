// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

//# init --addresses Test=0x0 A=0x42 --simulator

//# publish
module Test::M1 {
    use sui::object::{Self, UID};
    use sui::tx_context::TxContext;
    use sui::transfer;
    use sui::coin::Coin;

    struct Object has key, store {
        id: UID,
        value: u64,
    }

    fun foo<T: key, T2: drop>(_p1: u64, value1: T, _value2: &Coin<T2>, _p2: u64): T {
        value1
    }

    public entry fun create(value: u64, recipient: address, ctx: &mut TxContext) {
        transfer::public_transfer(
            Object { id: object::new(ctx), value },
            recipient
        )
    }
}

//# run Test::M1::create --args 0 @A

//# view-object 2,0

//# create-checkpoint

//# view-checkpoint


//# advance-epoch

//# view-checkpoint

//# run-graphql

{
  checkpoint {
    sequenceNumber
  }
}
//# create-checkpoint

//# view-checkpoint

//# run-graphql

{
  checkpoint {
    sequenceNumber
  }
}

//# run-graphql --show-usage --show-headers --show-service-version

{
  checkpoint {
    sequenceNumber
  }
}

//# view-checkpoint
